import ContentPage from "../components/ContentPage";

export const metadata = {
  title: "About Us | Karisoke Concierge",
};

export default function AboutPage() {
  return (
    <ContentPage
      eyebrow="About Karisoke"
      title="One local contact for your Rwanda plans."
      description="Karisoke Concierge helps visitors organize their time in Rwanda, bringing accommodation, transport, and experiences into one coordinated journey."
      items={[
        {
          title: "Tell us about your trip",
          description:
            "Share your travel dates, interests, group size, and the kind of experience you’re looking for.",
        },
        {
          title: "Explore your options",
          description:
            "We help you consider stays, transport, and activities that fit your plans.",
        },
        {
          title: "Agree on the details",
          description:
            "Discuss availability, costs, and arrangements with us before confirming a booking.",
        },
        {
          title: "Keep in touch",
          description:
            "Use WhatsApp or phone to discuss your plans directly with your concierge.",
        },
      ]}
    />
  );
}