const { default: LayoutOne } = require("@/Layout/LayoutOne");

const CancellationRefundPolicy = () => {
  const containerStyle = {
    fontFamily: "Arial, sans-serif",
    margin: "20px",
    lineHeight: "1.6",
    padding: "20px",
  };

  const sectionStyle = {
    marginBottom: "20px",
  };

  const headingStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "14px",
    marginBottom: "10px",
  };

  const listStyle = {
    paddingLeft: "20px",
    listStyle: "none", // Disable default bullet style
    position: "relative",
  };

  const listItemStyle = {
    position: "relative",
    paddingLeft: "20px",
    marginBottom: "10px",
  };

  const bulletStyle = {
    content: "'•'",
    position: "absolute",
    left: "0",
    color: "var(--primary-color)",
    fontSize: "1em",
    lineHeight: "1",
  };

  return (
    <div className="postDetails__area">
      <LayoutOne>
        <div style={containerStyle}>
          <div style={sectionStyle}>
            <h2 style={headingStyle}>ক্যান্সেলেশন ও রিফান্ড পলেসি</h2>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>রিফান্ড কি?</h3>
            <p style={paragraphStyle}>
              যখন একজন শিক্ষার্থী কারিগরী ত্রুটির কারনে আমাদের এপস্ কিংবা ওয়েবাইটে ভিজিট করতে পারবেন না অথবা
              যখন জোবায়ের একাডেমি প্রতিশ্রুতি অনুসারে সেবা প্রদানে অক্ষম হবেন তখন শিক্ষার্থীরা চাইলে যথাযথ
              ভেরিফিকেশন পদ্ধতি অনুসরনের মাধ্যমে রিফান্ডে এর জন্য আবেদন করতে পারবেন।
            </p>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>কিভাবে রিফান্ড এর জন্য আবেদন করবেন?</h3>
            <p style={paragraphStyle}>
              একটি কোর্স কেনার ৪৮ ঘন্টার ভিতরে আপনি চাইলে রিফান্ড এর জন্য আবেদন করতে পারবেন। রিফান্ড এর জন্য আবেদন করতে
              নিচের পদ্ধতি অনুসরন করেন:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                প্রথমে আমাদের কাষ্টমার কেয়ারে কল (01780 44 00 87) করে আপনি যে ইমেল/ ফোন নম্বর দিয়ে কোর্স কিনেছেন সেটা সঠিক ভাবে প্রদান করুন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                আমাদের কাষ্টমার কেয়ার প্রতিনিধি SMS এর মাধ্যমে আপনাকে একটি ফর্ম প্রদান করবেন। ফর্মটি সঠিক ভাবে পূরোন করে সাবমিট করুন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                রেজিস্ট্রেশনের সময় ব্যবহৃত আপনার ইমেল এবং ফোন নম্বর স্পষ্টভাবে উল্লেখ করতে ভুলবেন না।
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>নোট</h3>
            <p style={paragraphStyle}>
              ই-বুক, সাবস্ক্রিপশন ভিত্তিক ও লাইভ কোর্স এ অনুপস্থিত জনিত কারনে রিফান্ড আবেদন প্রযোজ্য হবে না।
            </p>
            <p style={paragraphStyle}>
              জোবায়ের একাডেমিতে অর্থ ফেরত অনুরোধ অনুমোদনের ৭ থেকে ১৪ কার্যদিবসের মধ্যে একজন গ্রাহক যে মাধ্যমে অর্থপ্রদান করেছেন
              বা ভাউচার আকারে সেই মাধ্যমেই ফেরত দেওয়া হবে যা ব্যবহারকারীকে ইমেল এর মাধ্যমে নিশ্চিৎ করা হবে।
            </p>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>কখন রিফান্ড প্রযোজ্য হবে না?</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                যদি আপনি ক্রয়ের তারিখ থেকে ৪৮ ঘন্টা পরে অভিযোগ বা ফেরতের অনুরোধ জমা দেন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                যদি আপনি ৪৮-ঘণ্টার অভিযোগের সময়ের মধ্যে আপনার কোর্স সার্টিফিকেট অর্জন করেন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                যদি রিফান্ড প্রক্রিয়া চলাকালীন সময়ে আপনি কোর্সটি চালিয়ে যান বা কোর্স উপকরণ ব্যবহার করেন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                আপনি যদি একটি ই-বুক কিনে থাকেন।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                আপনি যদি সাবস্ক্রিপশন ভিত্তিক কোর্স কিনে থাকেন এবং সেই কোর্সের জন্য ক্লাস শুরু হয়ে গেছে।
              </li>
              <li style={listItemStyle}>
                <span style={bulletStyle}></span>
                লাইভ ক্লাশ শুরু হওয়ার পরে অনুপস্থিত জনিত করনে রিফান্ড আবেদন গ্রহনযোগ্য হবে না।
              </li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>আপনি যখন রিফান্ড আবেদন করেন, তখন কী হয়?</h3>
            <p style={paragraphStyle}>
              একবার একটি রিফান্ড অনুরোধ জমা দেওয়া হলে, আপনার ক্রয়কৃত কোর্স সাময়িকভাবে লক করা হবে। জোবায়ের একাডেমি আপনাকে 
              এসএমএস-এর মাধ্যমে অবহিত করবে যদি রিফান্ডের অনুরোধটি ৩ কার্যদিবসের মধ্যে গৃহীত হয়। গৃহীত হওয়ার পরে, আপনাকে 
              কোর্স থেকে নাম মুছে দেয়া হবে এবং আপনার অগ্রগতি সরানো হবে।
            </p>
            <p style={paragraphStyle}>
              রিফান্ডের অনুরোধের পরে আপনার অ্যাকাউন্টে টাকা ফিরে আসতে ৭-১৪ কার্যদিবস পর্যন্ত সময় লাগতে পারে। 
              যদি এটি ১৪ কার্যদিবসের বেশি হয়ে থাকে, অনুগ্রহ করে 01780 44 00 87 (২৪x৭) এ কল করুন।
            </p>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>শেষ কথা</h3>
            <p style={paragraphStyle}>
              একবার ফেরত দেওয়া হয়ে গেলে, আপনি আপনার নিবন্ধিত ই-মেইল/ফোন নম্বরে একটি নিশ্চিতকরণ ইমেল/এসএমএস পাবেন। 
              জোবায়ের একাডেমি- পরিস্থিতি অনুযায়ী T&C পরিবর্তন করার পূর্ণ অধিকার সংরক্ষন করেন।
            </p>
          </div>
        </div>
      </LayoutOne>
    </div>
  );
};

export default CancellationRefundPolicy;
