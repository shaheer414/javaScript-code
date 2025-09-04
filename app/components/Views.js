export default async function Views() {
    await new Promise((resolve) => setTimeout(resolve,3000));
    return <div>10,000 Views</div>;
    }