import type { CollectionConfig } from 'payload'

function formatSlug(title: string): string {
  if (!title) return `untitled-${Date.now()}`;
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
  return slug || `untitled-${Date.now()}`;
}

export const Blogs: CollectionConfig = {
  slug: 'blogs',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        readOnly: false,
      },
      hooks: {
        beforeValidate: [
          ({ value, data }) => {
            if (!value && data?.title) {
              return formatSlug(data.title as string);
            }
            return value;
          },
        ],
      },
    },
    {
      name: 'image',
      type: 'text', // Or upload, but using text for now as requested or matching the structure
      label: 'Default Image URL',
      admin: {
        description: 'Provide a default image URL',
      },
      validate: (value: string | null | undefined) => {
        if (!value) return true; // Optional field
        try {
          new URL(value);
          return true;
        } catch {
          return 'Must be a valid URL';
        }
      },
    },
    {
      name: 'googleDriveImageUrl',
      type: 'text',
      label: 'Google Drive Image URL',
      admin: {
        description: 'Public Google Drive sharing link (e.g. /d/FILE_ID/ or id=FILE_ID). Automatically reformats to direct image URL. If provided, overrides default image.',
      },
      hooks: {
        beforeValidate: [
          ({ value }: { value?: string }) => {
            if (!value) return value;
            const match = value.match(/(?:\/d\/|id=)([\w-]+)/);
            if (match && match[1]) {
              return `https://lh3.googleusercontent.com/d/${match[1]}=w1280`;
            }
            return value; // let validation handle it if wanted, or just return as is
          },
        ],
      },
    },
  ],
}
