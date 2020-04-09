import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorIndexController extends Controller {
  /**
   * Callback for editor initialization.  Supplies us with an editor
   * interface for the document's contents.
   */
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
  }

  /**
   * Creates a new document in the shared backend and then transitions
   * to a route for that specific document.
   */
  @action
  async saveNewDocument() {
    let newEditorDocument = this.store.createRecord('editor-document', {
      title: 'New document',
      content: this.editor.htmlContent,
      createdOn: new Date(),
      modifiedOn: new Date()
    });
    await newEditorDocument.save();
    this.transitionToRoute('editor.edit', newEditorDocument.id);
  }
}
