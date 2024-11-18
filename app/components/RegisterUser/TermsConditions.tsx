import React from 'react';

const TermsConditions = () => {
  const termsLink = '###';
  const privacyPolicy = '###';

  return (
    <div className='flex flex-col items-start gap-1 my-5'>
      <p>
        Eu aceito os
        <a className='pl-1 underline' href={termsLink}>
          Termos e Condições
        </a>
        .
      </p>
      <p>
        Pode encontrar a nossa Política de Privacidade
        <a className='pl-1 underline' href={privacyPolicy}>
          aqui
        </a>
        .
      </p>
    </div>
  );
};

export default TermsConditions;
