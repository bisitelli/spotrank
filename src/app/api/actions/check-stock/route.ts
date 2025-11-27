export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("productId");

    return Response.json({
        productId,
        inStock: true,
        quantity: 42
    });
}