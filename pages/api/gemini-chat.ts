// app/api/gemini/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages = body.messages;

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("❌ GEMINI_API_KEY is not set.");
    return NextResponse.json({ error: "Missing API Key" }, { status: 500 });
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

  const systemPrompt = `You are an AI assistant for Kush Madan's portfolio website. You know everything about Kush, his background, projects, and experience. Answer as helpfully as possible. this is his resume:
  Kush Madan
 k5madan@uwaterloo.ca, kushmadan246@gmail.com | linkedin.com/in/kush-madan | github.com/Kush139
Education
University of Waterloo Candidate, Bachelor of Mathematics, Statistics, Machine Learning Coursework/Certifications
Sep. 2023 – Present
Waterloo, Ontario
• Data Structures
• Object Oriented Programming
• Algorithm Design and Data Abstraction
Skills Summary
• Statistics - Probability
• Azure Fundamentals
• Azure AI Fundamentals
Languages: Javascript, CSS, HTML, Python, C, C++, SQL, R
Tools/Frameworks: Django, Azure, Git, Spark, Scikit-learn, Pandas, Numpy, PyTorch, Power BI, Databricks, Cursor
Experience
Data Science Intern January 2025 – April 2025
Transport Canada Ottawa, ON
• Optimized data pipelines in Azure Databricks, improving run-time by 92% through efficient
transformation logic and pipeline tuning.
• Developed optimized SQL queries, Python scripts, and DAX expressions to analyze and model data, driving
actionable insights.
• Designed and built interactive Power BI dashboards and reports to support data-driven decision-making across
the organization.
Naval Combat Informations Operator January 2023 – Present
Royal Canadian Naval Reserves Kitchener, Ontario
• Completed Basic Military Qualification, mastering advanced time and stress management techniques through
rigorous operational training, enhancing team efficiency and readiness under high-pressure scenarios
Projects
Cross-Platform Malware Detection | Python, TensorFlow, OpenCV, macOS/Windows
• Designing a Convolutional Neural Network (CNN) to detect malware by converting binary files
into grayscale images and classifying them as benign or malicious
• Building a secure dataset of macOS and Windows binaries using isolated virtual machines to gather
and preprocess malware samples safely
• Planning to train and optimize the model for cross-platform generalization and detection
accuracy using TensorFlow and image-based classification techniques
Web Scraper and Sentiment Analysis Machine Learning Model | Python, Beautiful Soup, Scikit-learn
• Developed and implemented a sentiment analysis model using an SVM machine learning model
with a linear kernel using scikit-learn, achieving an overall accuracy of 81% on a test dataset of
2,748 samples
• Optimized data preprocessing with custom stopword removal, feature extraction using TF-IDF
vectorization, and hyperparameter tuning to enhance model performance
• Integrated the model into a Python-based application capable of analyzing sentiment from both
manually inputted text and web-scraped content using the Beautiful Soup library, providing
real-time sentiment categorization.

Interests: kush like playing socccer, watching soccer (chelsea fan), goes to the gym, watches mma, likes to hike, cook. always looking to adventure, learn, and try new things.`;

  const payload = {
    contents: [
      { role: "system", parts: [{ text: systemPrompt }] },
      ...messages.map((m: any) => ({
        role: m.role,
        parts: [{ text: m.content }],
      })),
    ],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("❌ Gemini API error:", res.status, errorText);
      return NextResponse.json({ error: "Gemini API failed" }, { status: res.status });
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || null;

    return NextResponse.json({ response: text });
  } catch (err) {
    console.error("❌ Server error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
