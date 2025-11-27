export async function POST(req: Request) {
    const { description } = await req.json();

    return Response.json({
        received: description,
        status: "Quote request logged"
    });
}