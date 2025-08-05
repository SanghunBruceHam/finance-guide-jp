import { useEffect } from "react";

interface AdSenseBannerProps {
  slot?: string;
  format?: string;
}

export default function AdSenseBanner({ 
  slot = "XXXXXXXXXX", 
  format = "auto" 
}: AdSenseBannerProps) {
  useEffect(() => {
    try {
      // Initialize AdSense ad if available
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (error) {
      console.log('AdSense not available:', error);
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="text-center">
        <ins 
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      </div>
    </div>
  );
}
