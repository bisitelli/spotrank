export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    return Response.json({
        success: true,
        message: "Contact info received",
        data: { name, email, message }
    });
}