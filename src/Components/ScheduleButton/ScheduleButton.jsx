import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useTranslation } from "react-i18next";
import { PrimaryButton } from "../_Common/common.styles";
import { ModalOverlay, ModalContent, Form, FormTitle, FormSubTitle, FlexRow, InputWrapper, InputField, SubmitButton, CloseButton } from "./ScheduleButton.styles";

export default function ScheduleButton ({ isOn }) {
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const { t } = useTranslation();
  
    const handleButtonClick = () => {
      setShowModal((prevShowModal) => !prevShowModal);
    };
  
    const handleModalClose = () => {
      setShowModal(false);
      setName("");
      setEmail("");
      setNumber("");
    };
  
    const confirm = (e) => {
      e.preventDefault();
      setShowModal(false);
      toast.success("Thank you for contacting us.");
      document.getElementById("form").submit();
    };

  return (
    <>
      <PrimaryButton isOn={isOn} onClick={handleButtonClick} role="button" title="Schedule">
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
            <Form onSubmit={confirm} action="https://api.web3forms.com/submit" method="POST" id="form">
              <input type="hidden" name="access_key" value="b07e6e42-1e9f-49f2-a3f6-284515cd1c8c" />
              <input type="hidden" name="subject" value="Hurray we got a new client 🎊"></input>
              <input type="hidden" name="redirect" value="https://webcity.dev"></input>
              <input type="hidden" name="from_name" value="Webcity request"></input>
              <input type="checkbox" name="botcheck" class="hidden" style={{ display: "none" }}></input>
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
