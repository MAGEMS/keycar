import InvoiceComponent from "@/components/invoice/Invoice";

import MetaComponent from "@/components/common/MetaComponent";

const metadata = {
  title: "Invoice - Key Car Rental Iceland",
  description: "Invoice - Key Car Rental Iceland",
};

const Invoice = () => {
  return (
    <>
      <MetaComponent meta={metadata} />
      <InvoiceComponent />
    </>
  );
};

export default Invoice;
