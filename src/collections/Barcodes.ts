import type { CollectionConfig } from "payload";

export const Barcodes: CollectionConfig = {
  slug: "barcodes",
  admin: {
    useAsTitle: "barcodeData",
  },
  fields: [
    {
      name: "asset",
      label: "Asset",
      type: "relationship",
      relationTo: "assets",
      required: true,
    },
    {
      name: "barcodeType",
      label: "Barcode type",
      type: "select",
      required: false,
      options: [
        {
          label: "One",
          value: "one",
        },
        {
          label: "Two",
          value: "two",
        },
      ],
    },
    {
      name: "barcodeData",
      label: "Barcode data",
      type: "text",
      required: true,
    },
    {
      name: "metadata",
      label: "Metadata",
      type: "json",
      required: false,
    },
  ],
};
