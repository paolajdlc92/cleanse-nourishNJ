import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function CleanseNourish() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");

  const handleChatSubmit = (e) => {
    e.preventDefault();
    window.location.href = `sms:19178324882?body=${encodeURIComponent(chatMessage)}`;
  };

  const bookingLink = "https://intakeq.com/booking/jtd67h?practitionerId=6727b469173304dafdc247a8";

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white p-6 shadow-md">
        <h1 className="text-3xl font-bold">Cleanse & Nourish</h1>
        <p className="text-lg">Colon Hydrotherapy | Veteran Owned</p>
      </header>

      {/* Hero Section */}
      <section className="p-8 text-center bg-white shadow-sm">
        <h2 className="text-2xl font-semibold mb-4">Restore Balance, Renew Vitality</h2>
        <p className="max-w-2xl mx-auto mb-6">
          At Cleanse & Nourish, we provide safe and professional colon hydrotherapy treatments to
          support your digestive health and overall well-being. Proudly veteran-owned and operated in
          Newark, NJ.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700">
          <a href={bookingLink} target="_blank">Book Your Session</a>
        </Button>
        <div className="mt-6 flex justify-center">
          <img
            src="/qr-code.png"
            alt="Booking QR Code"
            className="w-32 h-32"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Benefits of Colon Hydrotherapy</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Supports healthy digestion and regularity</li>
              <li>Promotes natural detoxification</li>
              <li>Improves energy and mental clarity</li>
              <li>Enhances overall sense of well-being</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-3">Our Location</h3>
            <p>
              612 S 12th St<br />
              Newark, NJ 07103
            </p>
            <iframe
              className="mt-4 w-full h-48 rounded"
              src="https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=612+S+12th+St,+Newark+NJ"
              allowFullScreen
            ></iframe>
          </CardContent>
        </Card>
      </section>

      {/* Illustrations */}
      <section className="p-8 bg-gray-100">
        <h3 className="text-xl font-semibold mb-4 text-center">Understanding Digestive Health</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Digestive_system_diagram_en.svg"
            alt="Digestive System Illustration"
            className="rounded shadow-md"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Human_colon_diagram.svg"
            alt="Colon Illustration"
            className="rounded shadow-md"
          />
        </div>
      </section>

      {/* Chat Feature */}
      <div className="fixed bottom-6 right-6">
        {chatOpen ? (
          <Card className="shadow-lg w-72">
            <CardContent className="p-4">
              <form onSubmit={handleChatSubmit}>
                <Textarea
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="mb-2"
                />
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                  Send via SMS
                </Button>
              </form>
              <Button
                variant="outline"
                className="w-full mt-2"
                onClick={() => setChatOpen(false)}
              >
                Close
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Button
            className="rounded-full w-14 h-14 bg-blue-600 hover:bg-blue-700 shadow-lg"
            onClick={() => setChatOpen(true)}
          >
            💬
          </Button>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6 text-center mt-8">
        <p>&copy; {new Date().getFullYear()} Cleanse & Nourish | Colon Hydrotherapy in Newark, NJ</p>
      </footer>
    </div>
  );
}
