import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorIndexController extends Controller {
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
  }

  @action
  /*
   * Save a new document
   */
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
