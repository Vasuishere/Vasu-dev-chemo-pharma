import { CollectionConfig } from 'payload';

export const Assets: CollectionConfig = {
  slug: 'assets',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'type', 'status', 'updatedAt'],
  },
  access: {
    // Basic access control: Admin only for now, can adjust later
    read: () => true, // Everyone can read (or restrict if needed)
    create: ({ req: { user } }) => Boolean(user), // Require login
    update: ({ req: { user } }) => Boolean(user),
    delete: ({ req: { user } }) => Boolean(user),
  },
  hooks: {
    beforeChange: [
      ({ operation, data, req }) => {
        if (operation === 'create' && !data.uploadedBy && req.user?.id) {
          data.uploadedBy = req.user.id;
        }

        return data;
      },
    ],
    afterChange: [
      ({ operation, doc, req }) => {
        // Simplified Audit Log implementation. 
        // In deep production this might insert to an 'AuditLogs' collection.
        console.log(`[AUDIT] Asset ${operation} by user ${req.user?.id || 'system'}: ${doc.id} (${doc.name})`);
        return doc;
      }
    ]
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        { label: 'Image', value: 'image' },
        { label: 'PDF', value: 'pdf' },
        { label: 'Other', value: 'other' },
      ],
      defaultValue: 'image',
    },
    {
      name: 'mimeType',
      type: 'text',
    },
    {
      name: 'driveLink',
      type: 'text',
      admin: {
        description: 'The Google Drive reference URL',
      },
    },
    {
      name: 'referenceSize',
      type: 'group',
      fields: [
        {
          name: 'width',
          type: 'number',
        },
        {
          name: 'height',
          type: 'number',
        },
        {
          name: 'maxBytes',
          type: 'number',
        },
      ],
    },
    {
      name: 'sizeBytes',
      type: 'number',
      admin: {
        readOnly: true,
      },
    },
    {
      name: 'uploadedBy',
      type: 'relationship',
      relationTo: 'users',
      hasMany: false,
    },
    {
      name: 'status',
      type: 'select',
      options: [
        { label: 'Pending', value: 'pending' },
        { label: 'Available', value: 'available' },
        { label: 'Error', value: 'error' },
      ],
      defaultValue: 'pending',
      required: true,
    },
    {
      name: 'associatedProduct',
      type: 'relationship',
      relationTo: 'products',
      hasMany: false,
      admin: {
        description: 'Product associated with this asset',
      },
    },
    {
      name: 'previewUrl',
      type: 'text',
      admin: {
        description: 'Local path or Drive thumbnail URL',
      },
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
  ],
};
