import Service from '@ember/service';

function normalizeLocation(location, reference) {
  return [location[0] + reference[0], location[1] + reference[0]];
}

export default class RdfaEditorExternalImagePluginService extends Service {
  editorApi = "0.1"

  execute(rdfaBlocks, hintsRegistry, editor, extraInfo){
    hintsRegistry.removeHints( { rdfaBlocks, scope: "external-image" } );

    for( const block of rdfaBlocks ){

      const screenshotContext = block.semanticNode.rdfaContext.find( (context) => (context.properties || []).includes( "http://mu.semte.ch/vocabularies/ext/screenshot" ) );
      if( screenshotContext ) {
        console.log( block );
        hintsRegistry.addHint( "external-image", {
          location: block.region,
          card: "plugins/update-external-image",
          info: {
            hintsRegistry, editor, location: block.region, node: block.semanticNode
          }
        });
      } else {
        const match = block.text && block.text.match(/image:\[\[([^\]]+)\]\[([^\]]+)\]\]/);
        if( match ){
          const { 0: matchedString, 1: url, 2: label, index: start } = match;

          const location = normalizeLocation( [ start, start + matchedString.length ], block.region );
          hintsRegistry.addHint( "external-image", {
            location,
            card: "plugins/external-image",
            info: {
              hintsRegistry, editor, location, url, label
            }
          });
        }
      }
    }
  }
}
