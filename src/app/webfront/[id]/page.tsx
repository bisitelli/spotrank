import fs from "fs";
import path from "path";

export default async function WebfrontPage(props: { params: Promise<{ id: string }> }) {
    const { id } = await props.params;

    const filePath = path.join(process.cwd(), "data", "webfronts", `${id}.json`);

    if (!fs.existsSync(filePath)) {
        return (
            <div className="p-10">
                <h1 className="text-2xl font-bold">Webfront not found</h1>
                <p>The requested storefront does not exist.</p>
            </div>
        );
    }

    const jsonRaw = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(jsonRaw);
    const data = json.storefront;

    return (
        <div className="p-10 max-w-3xl mx-auto space-y-10">
            {/* Summary */}
            {data.summary && (
                <section>
                    <h1 className="text-4xl font-bold mb-3">Summary</h1>
                    <p className="text-lg text-gray-700">{data.summary}</p>
                </section>
            )}

            {/* Contact Details */}
            {"contactDetails" in data && data.contactDetails && (
                <section>
                    <h2 className="text-3xl font-semibold mb-3">Contact</h2>
                    <div className="space-y-2 text-gray-700">

                        {data.contactDetails.email && (
                            <p><strong>Email:</strong> {data.contactDetails.email}</p>
                        )}
                        {data.contactDetails.phone && (
                            <p><strong>Phone:</strong> {data.contactDetails.phone}</p>
                        )}
                        {data.contactDetails.address && (
                            <p><strong>Address:</strong> {data.contactDetails.address}</p>
                        )}
                        {data.contactDetails.website && (
                            <p><strong>Website:</strong> {data.contactDetails.website}</p>
                        )}
                    </div>
                </section>
            )}

            {/* Services */}
            {"services" in data && Array.isArray(data.services) && data.services.length > 0 && (
                <section>
                    <h2 className="text-3xl font-semibold mb-3">Services</h2>
                    <ul className="list-disc pl-6 text-gray-700">
                        {data.services.map((s: any, i: number) => (
                            <li key={i}>
                                <strong>{s.name}</strong>
                                {s.description && (
                                    <p className="text-gray-600 text-sm mt-1">{s.description}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </section>
            )}

            {/* FAQ */}
            {"faq" in data && Array.isArray(data.faq) && data.faq.length > 0 && (
                <section>
                    <h2 className="text-3xl font-semibold mb-3">FAQ</h2>
                    <div className="space-y-4">
                        {data.faq.map((f: any, i: number) => (
                            <div key={i}>
                                <p className="font-bold">{f.question}</p>
                                <p className="text-gray-700">{f.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* Business Details */}
            {"businessDetails" in data && data.businessDetails && (
                <section>
                    <h2 className="text-3xl font-semibold mb-3">Business Details</h2>
                    <div className="space-y-2 text-gray-700">

                        {data.businessDetails.industry && (
                            <p>
                                <strong>Industry:</strong> {data.businessDetails.industry}
                            </p>
                        )}

                        {data.businessDetails.targetCustomers && (
                            <p>
                                <strong>Target Customers:</strong> {data.businessDetails.targetCustomers}
                            </p>
                        )}

                        {data.businessDetails.painPoints && (
                            <p>
                                <strong>Pain Points:</strong> {data.businessDetails.painPoints}
                            </p>
                        )}

                        {data.businessDetails.valueProposition && (
                            <p>
                                <strong>Value Proposition:</strong> {data.businessDetails.valueProposition}
                            </p>
                        )}

                    </div>
                </section>
            )}

            {/* Action Layer */}
            {data.action_layer && (
                <section>
                    <h2 className="text-3xl font-semibold mb-3">Action Layer</h2>
                    <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
                        {JSON.stringify(data.action_layer, null, 2)}
                    </pre>
                </section>
            )}
        </div>
    );
}
