import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import Form, { SubmitButton, TextareaField } from '../../common/form';
import { createTestimonial } from '../../../store/testimonials';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountId, getLoggedInStatus } from '../../../store/auth';
import { nanoid } from 'nanoid';

const TestimonialForm = () => {
  const { control, handleSubmit, reset } = useForm();
  const isLoggedIn = useSelector(getLoggedInStatus());
  const accountId = useSelector(getAccountId());
  const dispatch = useDispatch();

  const handleFormSubmit = (data) => {
    const id = nanoid();
    dispatch(createTestimonial(id, { id, ...data, creatorId: accountId }));
    reset();
  };

  if (!isLoggedIn) return null;

  return (
    <Form title="Leave feedback" onSubmit={handleSubmit(handleFormSubmit)}>
      <Controller
        name="message"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <TextareaField
            label="Feedback Message"
            value={value}
            error={error}
            onChange={onChange}
            rows={4}
          />
        )}
        rules={{
          required: 'Feedback message is required',
          minLength: {
            value: 30,
            message: 'Feedback message should contain min 30 symbols',
          },
          maxLength: {
            value: 400,
            message: 'Feedback message should contain max 400 symbols',
          },
        }}
      />
      <SubmitButton>Send feedback</SubmitButton>
    </Form>
  );
};

export default TestimonialForm;
