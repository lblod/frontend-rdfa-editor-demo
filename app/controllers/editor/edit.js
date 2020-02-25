import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditorEditController extends Controller {
  @action
  handleRdfaEditorInit(editor) {
    this.set('editor', editor);
  }

  @action
  async save() {
    let editorDocument = this.model;
    editorDocument.set('modifiedOn', new Date());
    editorDocument.set('content', this.editor.rootNode.innerHTML);
    await editorDocument.save();
    this.set('editorDocument', editorDocument);
  }
}
