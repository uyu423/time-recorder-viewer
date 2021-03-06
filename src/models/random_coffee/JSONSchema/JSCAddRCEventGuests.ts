import { IJSONSchemaType } from '../../common/IJSONSchemaType';

export const JSCAddRCEventGuests: IJSONSchemaType = {
  definitions: {
    IUsersItem: {
      properties: {
        id: {
          type: 'string'
        },
        name: {
          type: 'string'
        },
        real_name: {
          type: 'string'
        }
      },
      required: ['id', 'name', 'real_name'],
      type: 'object'
    }
  },
  properties: {
    params: {
      properties: {
        eventId: {
          type: 'string'
        }
      },
      required: ['eventId']
    },
    body: {
      properties: {
        guests: {
          items: {
            $ref: '#/definitions/IUsersItem'
          },
          type: 'array'
        }
      },
      required: ['guests'],
      type: 'object'
    }
  },
  required: ['params', 'body'],
  type: 'object'
};
