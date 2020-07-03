import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorEditController extends Controller {
  @tracked
  showTriples = false;

  @service( "rdfa/triples-watch" ) triplesWatch;

  /**
   * Callback for editor initialization.  Supplies us with an editor
   * interface for the document's contents.
   */
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
    this.triplesWatch.startWatching( document.getElementsByClassName("say-editor__paper")[0] );
  }

  /**
   * Save the document to the shared backend
   */
  @action
  async save() {
    let editorDocument = this.model;
    editorDocument.set('modifiedOn', new Date());
    editorDocument.set('content', this.editor.htmlContent);

    this.editor.setHtmlContent(editorDocument.content);
    await editorDocument.save();
  }
}
