import Model, { attr } from '@ember-data/model';

export default class EditorDocumentModel extends Model {
  @attr('string') title;
  @attr('string') content;
  @attr('datetime') createdOn;
  @attr('datetime') modifiedOn;
}
