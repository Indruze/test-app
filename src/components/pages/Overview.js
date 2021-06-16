import React, { useState } from "react";
import InfoCard from '../common/InfoCard';
import Button from '../common/Button';
import { useTranslation, Trans } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Overview = () => {
    const [t] = useTranslation();
    const initialState = t("news", { returnObjects: true })

    const [ messages, setMessages ] = useState(initialState);
    const [ showModal, setShowModal ] = React.useState(false);
    const [ value, setValue ] = React.useState({newsTitle: '', newsSubtitle: '', newsContent: ''});
    let name = 'Jesper Knut Sørvaag';

    const handleChange = e => {
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      })
    }

    const handleSubmit = e => {
      e.preventDefault();
      addMessage(value);
      setValue("");
      setShowModal(false);
    };

    const addMessage = data => {
      const newMessages = [...messages, { newsTitle: data.title, newsSubtitle: data.subtitle, newsContent: data.description }];
      setMessages(newMessages);
    };
  
    return (
        <div className="m-10">
          <h1>{t("homePageTitle")}</h1>
          <p className="mb-4">
            <Trans i18nKey="homePageSubtitle">
              <b>{{name}}</b>
            </Trans>
          </p>
          <Button
            content={t("addSomethingNewButtonTitle")}
            onClick={() => setShowModal(true)}
            iconPosition="left"
            icon={<FontAwesomeIcon icon={faPlus} />}
          />
          {showModal ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
                <div className="relative w-auto my-6 mx-auto w-10/12 md:w-1/2 h-1/2 md:h-3/4">
                  <div className="border-0 rounded shadow flex flex-col w-full bg-white p-4">
                    <form
                      onSubmit={handleSubmit}
                      className="w-100 px-8 pt-6 pb-8 mb-4"
                    >
                      <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {t("formTitle")}
                        </label>
                        <input
                          value={value.title || ''}
                          name="title"
                          type="text"
                          className="shadow border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {t("formSubtitle")}
                        </label>
                        <textarea
                          value={value.subtitle || ''}
                          type="text"
                          name="subtitle"
                          className="shadow border rounded w-full p-5 focus:outline-none focus:shadow-outline"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                          {t("formDescription")}
                        </label>
                        <textarea
                          value={value.description || ''}
                          type="text"
                          name="description"
                          className="shadow border rounded w-full p-5 focus:outline-none focus:shadow-outline h-52"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Button
                          content="Close"
                          type="clean"
                          onClick={() => setShowModal(false)}
                        />
                        <Button
                          content="Save"
                          submit
                          disabled={!value.title || !value.description}
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ): null}
            <div className="flex flex-col xl:flex-row my-10">
              <div className="w-full xl:w-3/4 mr-0 xl:mr-10">
              {messages.map(message => {
                  return (
                      <InfoCard
                          key={message.id}
                          title={message.newsTitle}
                          subtitle={message.newsSubtitle}
                          text={message.newsContent}
                      />
                  )
              })}
              </div>
            <div className="w-full xl:w-1/4 mt-12 xl:mt-0">
              <InfoCard
                subtitle={t("helpFiledTitle")}
                text={t("helpFieldContent")}
                button
              />
            </div>
            </div>
          </div>
    );
}

export default Overview;


                      