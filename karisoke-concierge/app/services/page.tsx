import ContentPage from "../components/ContentPage";

export const metadata = {
  title: "Our Services | Karisoke Concierge",
};

export default function ServicesPage() {
  return (
    <ContentPage
      eyebrow="Our services"
      title="Your Rwanda journey, thoughtfully arranged."
      description="Tell us what you need, and we’ll help coordinate the details around your interests, schedule, and budget."
      items={[
        {
          title: "Hotels & accommodation",
          description:
            "Get help finding and arranging a stay that suits your trip, whether you’re looking for a city hotel or a peaceful retreat.",
        },
        {
          title: "Airport transfers & transport",
          description:
            "Arrange airport pickups and transport between the places on your itinerary.",
        },
        {
          title: "Tours & experiences",
          description:
            "Plan experiences around your interests, from nature and wildlife to culture and city exploration.",
        },
        {
          title: "Personalized trip planning",
          description:
            "Bring your ideas, travel dates, and priorities. We’ll help turn them into a practical itinerary.",
        },
      ]}
    />
  );
}