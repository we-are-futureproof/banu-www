"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Video, MapPin } from "lucide-react"

// TypeScript definitions for Cal.com
declare global {
  interface Window {
    Cal?: {
      (action: string, namespace: string, options?: object): void;
      ns: {
        [key: string]: {
          (action: string, options: object): void;
        };
      };
      loaded?: boolean;
    };
  }
}

// Calendar configuration data
type CalendarConfig = {
  tabValue: string;
  title: string;
  description: string;
  namespace: string;
  calLink: string;
  elementId: string;
  icon: React.ReactNode;
};

const calendarConfigs: CalendarConfig[] = [
  {
    tabValue: "online",
    title: "Online Therapy Sessions",
    description: "Connect from the comfort of your home through secure video conferencing.",
    namespace: "online-session",
    calLink: "bdalamanli/online-session",
    elementId: "online-calendar",
    icon: <Video className="h-4 w-4 mr-2" />
  },
  {
    tabValue: "amsterdam",
    title: "In-Person Sessions - Amsterdam",
    description: "Face-to-face therapy sessions at our Amsterdam location.",
    namespace: "in-person-session-amsterdam",
    calLink: "bdalamanli/in-person-session-amsterdam",
    elementId: "amsterdam-calendar",
    icon: <MapPin className="h-4 w-4 mr-2" />
  },
  {
    tabValue: "haarlem",
    title: "In-Person Sessions - Haarlem",
    description: "Face-to-face therapy sessions at our Haarlem location.",
    namespace: "in-person-session-haarlem",
    calLink: "bdalamanli/in-person-session-haarlem",
    elementId: "haarlem-calendar",
    icon: <MapPin className="h-4 w-4 mr-2" />
  }
];

// Custom hook for Cal.com calendar integration
function useCalendar() {
  const [calScriptLoaded, setCalScriptLoaded] = useState(false);

  // Function to load the Cal.com script
  const loadCalScript = () => {
    if (typeof window === "undefined") return;
    if (calScriptLoaded) return;
    
    const existingScript = document.getElementById("cal-script");
    if (existingScript) {
      setCalScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = "cal-script";
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    script.onload = () => setCalScriptLoaded(true);
    document.head.appendChild(script);
  };

  // Function to initialize a calendar
  const initCalendar = (config: CalendarConfig) => {
    if (typeof window === "undefined" || !window.Cal) return;

    // Clean up existing instance if any
    const container = document.getElementById(config.elementId);
    if (container) container.innerHTML = '';

    // Initialize the calendar
    window.Cal("init", config.namespace, {origin: "https://cal.com"});
    window.Cal.ns[config.namespace]("inline", {
      elementOrSelector: `#${config.elementId}`,
      config: {"layout": "month_view"},
      calLink: config.calLink,
    });
  };

  return { calScriptLoaded, loadCalScript, initCalendar };
}

// Calendar component
function CalendarTab({ config, isActive }: { config: CalendarConfig, isActive: boolean }) {
  const { calScriptLoaded, loadCalScript, initCalendar } = useCalendar();

  // Load script on mount
  useEffect(() => {
    loadCalScript();
  }, []);

  // Initialize calendar when tab is active and script is loaded
  useEffect(() => {
    if (!isActive || !calScriptLoaded) return;
    
    const timer = setTimeout(() => {
      initCalendar(config);
    }, 100);

    return () => clearTimeout(timer);
  }, [isActive, calScriptLoaded, config]);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{config.title}</h2>
          <p className="text-muted-foreground">
            {config.description}
          </p>
          <div className="h-[600px] bg-gray-50 rounded-lg border">
            <div 
              id={config.elementId} 
              className="cal-container" 
              style={{width:"100%", height:"100%", overflow:"scroll"}}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function BookingPage() {
  const [activeTab, setActiveTab] = useState("online");

  return (
    <div className="flex flex-col min-h-screen bg-therapy-beige/30">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-therapy-beige">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Booking</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Schedule a therapy session that works for your needs and location
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Tabs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="online" className="w-full max-w-4xl mx-auto" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {calendarConfigs.map(config => (
                <TabsTrigger key={config.tabValue} value={config.tabValue} className="text-sm sm:text-base">
                  {config.icon} {config.tabValue === "online" ? "Online Session" : 
                    config.tabValue === "amsterdam" ? "Amsterdam In-Person Session" : "Haarlem In-Person Session"}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {calendarConfigs.map(config => (
              <TabsContent key={config.tabValue} value={config.tabValue} className="space-y-8">
                <CalendarTab config={config} isActive={activeTab === config.tabValue} />
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  )
}
