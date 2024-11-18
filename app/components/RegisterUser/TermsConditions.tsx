import React from 'react';

const TermsConditions = () => {
  const termsLink = '###';
  const privacyPolicy = '###';

  return (
    <div className='flex flex-col items-start gap-1 my-5 text-sm'>
      <div>
        Eu aceito os
        <a className='pl-1 underline' href={termsLink}>
          Termos e Condições
        </a>
        .
      </div>
      <div className='text-start text-sm'>
        <div>
          Pode encontrar a nossa Política de Privacidade
          <a className='pl-1 underline' href={privacyPolicy}>
            aqui
          </a>
          .
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
