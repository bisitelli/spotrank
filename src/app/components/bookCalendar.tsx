import { useState } from "react";

const CalendarModalButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="bg-primary text-white font-bold py-3 mt-6 px-6 rounded-lg hover:opacity-90 transition"
            >
                Book Demo
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white rounded-xl w-full max-w-4xl h-[600px] p-4 relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
                        >
                            &times;
                        </button>
                        <iframe
                            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3REgXkqCLThu8uFfGyndyNI1R2g9hhGAl6wmwAcS9t07njzM2yVcz_6v1s9Rs5BwkvGKh68-Kv?gv=true"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            className="rounded-lg"
                            scrolling="yes"
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default CalendarModalButton;
