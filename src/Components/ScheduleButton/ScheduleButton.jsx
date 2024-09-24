import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../_Common/common.styles";
import { ModalOverlay, ModalContent, Form, FormTitle, FormSubTitle, FlexRow, InputWrapper, InputField, SubmitButton, CloseButton } from "./ScheduleButton.styles";

export default function ScheduleButton ({ isOn, alt }) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
  
    const handleButtonClick = () => {
      setShowModal((prevShowModal) => !prevShowModal);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
      setName("");
      setEmail("");
      setNumber("");
    };
  
    const confirm = async (e) => {
      e.preventDefault();
      
      const formData = new FormData(e.target);
      
      try {
        // Submit the form data using fetch
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          toast.success("Thank you for contacting us.");
          setShowModal(false);
          
          // Redirect based on the current language
          const redirectUrl = currentLang === "en" 
            ? "https://ibuw043jey1.typeform.com/to/oimMXCve" 
            : "https://ibuw043jey1.typeform.com/to/ztpszSyT";
          
          window.location.href = redirectUrl;
        } else {
          toast.error("There was an error submitting the form.");
        }
      } catch (error) {
        toast.error("Submission failed. Please try again.");
      }
    };

  return (
    <>
      <PrimaryButton alt={alt} isOn={isOn} onClick={handleButtonClick} role="button" title="Schedule">
        {t('buttonText.scheduling')}
      </PrimaryButton>
      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <div>
              <FormTitle>
                {t('formText.schedulingAppointment')}
              </FormTitle>
              <FormSubTitle>
                {t('formText.schedulingSlogan')} <span>⚡</span>
              </FormSubTitle>
            </div>
            <Form onSubmit={confirm} id="form">
              <input type="hidden" name="access_key" value="b07e6e42-1e9f-49f2-a3f6-284515cd1c8c" />
              <input type="hidden" name="subject" value="Hurray we got a new client 🎊"></input>
              <input type="hidden" name="from_name" value="Webcity request"></input>
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }}></input>
              <FlexRow>
                <InputWrapper>
                  <InputField
                    type="text"
                    name="name"
                    required
                    value={name}
                    placeholder={t('formText.fullname')}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputWrapper>
                <InputWrapper>
                  <InputField
                    type="tel"
                    name="number"
                    required
                    value={number}
                    placeholder={t('formText.phone')}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </InputWrapper>
              </FlexRow>
              <InputWrapper>
                <InputField
                  type="email"
                  name="email"
                  required
                  value={email}
                  placeholder={t('formText.email')}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputWrapper>
              <SubmitButton type="submit">{t('formText.submit')}</SubmitButton>
            </Form>
            <CloseButton onClick={handleModalClose}>
              <svg
                fill="none"
                stroke="var(--text-color)"
                height="16px"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.25 17.25 6.75 6.75"></path>
                <path d="m17.25 6.75-10.5 10.5"></path>
              </svg>
            </CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};
