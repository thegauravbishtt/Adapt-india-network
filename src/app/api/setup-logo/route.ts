import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const publicDir = path.join(process.cwd(), "public");
    const servicesDir = path.join(publicDir, "services");

    if (!fs.existsSync(servicesDir)) {
      fs.mkdirSync(servicesDir, { recursive: true });
    }

    const resourcesDir = path.join(publicDir, "resources");
    if (!fs.existsSync(resourcesDir)) {
      fs.mkdirSync(resourcesDir, { recursive: true });
    }

    const filesToCopy = [
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\contact_enterprise_desk_1793178774381.jpg",
        dest: path.join(publicDir, "banner-contact-enterprise.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\about_enterprise_hq_1793178811495.jpg",
        dest: path.join(publicDir, "banner-about-enterprise.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\articles_insights_banner_1793178839220.jpg",
        dest: path.join(publicDir, "banner-articles-enterprise.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\clients_showcase_banner_1793178862036.jpg",
        dest: path.join(publicDir, "banner-clients-enterprise.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\globe_hand_resilience_1793251053875.jpg",
        dest: path.join(publicDir, "fabric-resilience.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\network_intelligence_card_1793209670891.jpg",
        dest: path.join(publicDir, "fabric-intelligence.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\network_future_card_1793209694824.jpg",
        dest: path.join(publicDir, "fabric-future.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\halftone_globe_bg_1793210336633.jpg",
        dest: path.join(publicDir, "halftone-globe.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\halftone_globe_light_1793210852615.jpg",
        dest: path.join(publicDir, "halftone-globe-light.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\ai_network_chip_1793167593994.jpg",
        dest: path.join(resourcesDir, "ai_network_chip.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\smart_city_grid_1793167612775.jpg",
        dest: path.join(resourcesDir, "smart_city_grid.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\network_engineer_ops_1793167634074.jpg",
        dest: path.join(resourcesDir, "network_engineer_ops.jpg"),
      },
      {
        src: "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\globe_connectivity_dc_1793167661638.jpg",
        dest: path.join(resourcesDir, "globe_connectivity_dc.jpg"),
      },
    ];

    for (const item of filesToCopy) {
      if (fs.existsSync(item.src)) {
        fs.copyFileSync(item.src, item.dest);
      }
    }

    const copied: string[] = [];
    const transparentLogoSrc = "C:\\Users\\bisht\\.gemini\\antigravity-ide\\brain\\6c5e0fa8-3291-4d56-b92d-22949e18fc09\\.user_uploaded\\media_1793171388518.png";
    if (fs.existsSync(transparentLogoSrc)) {
      fs.copyFileSync(transparentLogoSrc, path.join(publicDir, "logo.png"));
      fs.copyFileSync(transparentLogoSrc, path.join(publicDir, "logo-nobg.png"));
      copied.push("logo.png (without bg)");
    }

    const videoDest = path.join(publicDir, "network-bg.mp4");
    let videoStatus = "not started";
    try {
      const stats = fs.existsSync(videoDest) ? fs.statSync(videoDest) : null;
      if (!stats || stats.size < 100000) {
        const videoRes = await fetch(
          "https://videos.pexels.com/video-files/3141210/3141210-hd_1920_1080_25fps.mp4",
          { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } }
        );
        videoStatus = `fetch status: ${videoRes.status}`;
        if (videoRes.ok) {
          const buffer = await videoRes.arrayBuffer();
          fs.writeFileSync(videoDest, Buffer.from(buffer));
          copied.push(`network-bg.mp4 (${buffer.byteLength} bytes)`);
        }
      } else {
        videoStatus = `already exists with size: ${stats.size}`;
      }
    } catch (e: any) {
      videoStatus = `error: ${e.message}`;
    }

    return NextResponse.json({
      success: true,
      videoStatus,
      copied,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message, stack: err.stack }, { status: 500 });
  }
}
