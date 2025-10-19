import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../26-ForgetPassword/forget-password.css";

const RESEND_SECONDS = 60;

const ForgetPassword2 = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef([]);
  const navigate = useNavigate();

  // timer state
  const [secondsLeft, setSecondsLeft] = useState(RESEND_SECONDS);
  const timerRef = useRef(null);

  useEffect(() => {
    // start timer on mount
    startTimer();
    // focus first input on mount
    if (inputsRef.current[0]) inputsRef.current[0].focus();

    return () => {
      clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startTimer = () => {
    clearInterval(timerRef.current);
    setSecondsLeft(RESEND_SECONDS);
    timerRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };

  const handleChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      if (otp[index] === "") {
        // move to previous if exists
        if (index > 0) {
          inputsRef.current[index - 1]?.focus();
          const newOtp = [...otp];
          newOtp[index - 1] = "";
          setOtp(newOtp);
        }
      } else {
        // clear current
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  // handle paste of full code
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("text").trim();
    if (/^\d{4}$/.test(paste)) {
      const chars = paste.split("");
      setOtp(chars);
      // focus last
      inputsRef.current[3]?.focus();
    }
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otp.some((d) => d === "")) {
      alert("Please enter all 4 digits");
      return;
    }
    // هنا ممكن تضيف verify API قبل navigate
    navigate("/forgetpassword3");
  };

  const handleResend = () => {
    if (secondsLeft > 0) return;
    // محاكاة إعادة الإرسال — لاحقًا تضع هنا استدعاء API
    alert("Verification code resent!");
    setOtp(["", "", "", ""]);
    if (inputsRef.current[0]) inputsRef.current[0].focus();
    startTimer();
  };

  // helper to format timer mm:ss
  const formatTime = (s) => {
    const mm = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const ss = (s % 60).toString().padStart(2, "0");
    return `${mm}:${ss}`;
  };

  return (
    <section className="forget-page forget-step2">
      <div className="forget-box">
        <img src="/img/logopass.svg" alt="Logo" className="forget-logo" />
        <h2 className="forget-title">Verification</h2>

        <form className="otp-form" onSubmit={handleSubmit} onPaste={handlePaste}>
          <div className="otp-inputs">
            {otp.map((digit, i) => (
              <input
                key={i}
                inputMode="numeric"
                pattern="[0-9]*"
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, i)}
                ref={(el) => (inputsRef.current[i] = el)}
                className="otp-box"
                aria-label={`otp-${i}`}
              />
            ))}
          </div>

          <div className="otp-timer-and-btn">
            <div className="otp-timer">
              {secondsLeft > 0 ? (
                <span style={{color:"#9F1915"}}>{formatTime(secondsLeft)}</span>
              ) : (
                <button type="button" className="resend-btn-inline" onClick={handleResend}>
                  Resend
                </button>
              )}
            </div>

            <div className="forget-btn-wrap">
              <button type="submit" className="forget-btn">
               continue
              </button>
            </div>
              <p style={{fontSize:"12px"}}><span style={{color:"#9F1915"}}>If you didn’t receive a code!</span > Resend</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword2;
