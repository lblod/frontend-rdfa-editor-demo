import Route from '@ember/routing/route';

export default class EditorEditRoute extends Route {
  model(params) {
    return this.store.findRecord('editor-document', params.id);
  }
}
