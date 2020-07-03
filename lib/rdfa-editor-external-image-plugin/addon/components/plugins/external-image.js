import { action } from '@ember/object';
import Component from '@glimmer/component';

export default class PluginsExternalImageComponent extends Component {
  @action
  insert(){
    const info = this.args.info;
    const html = `<img src="${info.url}" property="http://mu.semte.ch/vocabularies/ext/screenshot" alt="${info.label}" />`;

    info.hintsRegistry.removeHintsAtLocation( info.location, info.hrId, "external-image" );
    const selection = info.editor.selectHighlight( info.location );
    info.editor.update( selection, {
      set: { innerHTML: html }
    });
  }

    // selection
    //   |> HintsRegistry.updateLocation()
    //   |> EventProcessor.analyzeAndDispatch()

    // EventProcessor probably shares editor

  // insert(){
  //   const info = this.args.info;
  //   const editor = info.editor;
  //   const innerHTML = `<img src="${info.url}" property="http://mu.semte.ch/vocabularies/ext/screenshot" alt="${info.label}" />`;
  //
  //   editor.update(
  //     editor.selectHighlight( info.location ),
  //     { set: { innerHTML } } );
  // }
}
