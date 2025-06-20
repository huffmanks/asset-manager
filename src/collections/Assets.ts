import type { CollectionConfig } from "payload";

import barcodeScannerField from "@/app/(frontend)/fields/barcode-scanner";

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
        },
        barcodeScannerField,
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
