import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorEditController extends Controller {
  /**
   * Callback for editor initialization.  Supplies us with an editor
   * interface for the document's contents.
   */
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
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
