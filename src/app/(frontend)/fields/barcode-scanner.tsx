import { Field } from "payload";

const barcodeScannerField: Field = {
  name: "barcodeScan",
  label: "Scan Barcode",
  type: "json",
  admin: {
    components: {
      Field: "@/app/(frontend)/components/barcode-scanner",
    },
  },
};

export default barcodeScannerField;
