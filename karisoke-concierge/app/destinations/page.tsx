import ContentPage from "../components/ContentPage";

export const metadata = {
  title: "Explore Rwanda | Karisoke Concierge",
};

export default function DestinationsPage() {
  return (
    <ContentPage
      eyebrow="Explore Rwanda"
      title="What does your kind of adventure look like?"
      description="Find inspiration for your journey, from time in the city to quieter days surrounded by nature."
      items={[
        {
          title: "Kigali",
          description:
            "Make space for city exploration, local food, art, and cultural experiences.",
        },
        {
          title: "Volcanoes National Park",
          description:
            "Build your journey around mountain scenery and an interest in gorilla trekking. Ask us about planning and availability.",
        },
        {
          title: "Lake Kivu",
          description:
            "Slow the pace with a lakeside stay, time by the water, and room to relax.",
        },
        {
          title: "Nyungwe",
          description:
            "Consider a forest-focused escape with guided walks and time to appreciate nature.",
        },
      ]}
    />
  );
}