import type { CollectionConfig } from "payload";

export const Assets: CollectionConfig = {
  slug: "assets",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "image",
      label: "Image",
      type: "upload",
      relationTo: "media",
      required: false,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true,
    },
    {
      name: "manufacturer",
      label: "Manufacturer",
      type: "text",
      required: false,
    },
    {
      name: "manualPdfUrl",
      label: "Manual PDF URL",
      type: "text",
      required: false,
    },
    {
      name: "quantity",
      label: "Quantity",
      type: "number",
      required: true,
    },
    {
      name: "unitIdentifiers",
      label: "Unit identifiers",
      type: "array",
      fields: [
        {
          name: "serialNumber",
          label: "Serial number",
          type: "text",
          required: false,
        },
        {
          name: "modelNumber",
          label: "Model number",
          type: "text",
          required: false,
        },
        {
          name: "macAddress",
          label: "MAC address",
          type: "text",
          required: false,
          validate: (val: string) => {
            const macRegex = /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/;
            return macRegex.test(val)
              ? true
              : "Invalid MAC address format (e.g. 00:1A:2B:3C:4D:5E)";
          },
        },
      ],
    },
    {
      name: "owner",
      label: "Owner",
      type: "relationship",
      relationTo: "users",
      required: true,
      defaultValue: ({ user }) => user?.id,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "location",
      label: "Location",
      type: "relationship",
      relationTo: "locations",
      required: true,
      admin: {
        position: "sidebar",
      },
    },
  ],
};
