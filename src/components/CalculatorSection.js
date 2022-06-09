import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import { useAuth } from "./../util/auth";
import PlacesAutocomplete from 'react-places-autocomplete';
import "./CalculatorSection.scss";

import usePlacesAutocomplete from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";



function CalculatorSection(props) {
 /* const [address, setAddress] = useState("Please enter your address");

  const  handleChange = address => {
    setAddress( address );
  };

  const handleSelect = address => {
    setAddress( address );
  console.log(address)
  };*/

  /*const onSubmit = (data) => {
    // Show pending indicator
    setPending(true);

    auth
      .updatePassword(data.pass)
      .then(() => {
        // Clear form
        reset();
        // Set success status
        props.onStatus({
          type: "success",
          message: "Your password has been updated",
        });
      })
      .catch((error) => {
        if (error.code === "auth/requires-recent-login") {
          // Update state to show re-authentication modal
          props.onStatus({
            type: "requires-recent-login",
            // Resubmit after reauth flow
            callback: () => onSubmit({ pass: data.pass }),
          });
        } else {
          // Set error status
          props.onStatus({
            type: "error",
            message: error.message,
          });
        }
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };*/


  /*return (
      <div><h1>HELOC Calculator</h1>
      <label>Your address:</label>
    <PlacesAutocomplete
    value={address}
    onChange={handleChange}
    onSelect={handleSelect}
  >
    {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
      <div>
        <input
          {...getInputProps({
            placeholder: 'Please enter your address ...',
            className: 'location-search-input',
          })}
        />
        <div className="autocomplete-dropdown-container">
          {loading && <div>Loading...</div>}
          {suggestions.map(suggestion => {
            const className = suggestion.active
              ? 'suggestion-item--active'
              : 'suggestion-item';
            // inline style for demonstration purpose
            const style = suggestion.active
              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
              : { backgroundColor: '#ffffff', cursor: 'pointer' };
            return (
              <div
                {...getSuggestionItemProps(suggestion, {
                  className,
                  style,
                })}
              >
                <span>{suggestion.description}</span>
              </div>
            );
          })}
        </div>
      </div>
    )}
  </PlacesAutocomplete></div>
  )*/

  /*return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="formName">
        <FormField
          name="Address"
          type="password"
          label="New Password"
          placeholder="Password"
          size="lg"
          error={errors.pass}
          inputRef={register({
            required: "Please enter a password",
          })}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <FormField
          name="confirmPass"
          type="password"
          label="Confirm New Password"
          placeholder="Confirm Password"
          size="lg"
          error={errors.confirmPass}
          inputRef={register({
            required: "Please enter your new password again",
            validate: (value) => {
              if (value === getValues().pass) {
                return true;
              } else {
                return "This doesn't match your password";
              }
            },
          })}
        />
      </Form.Group>
      <Button type="submit" size="lg" disabled={pending}>
        <span>Save</span>

        {pending && (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden={true}
            className="ml-2 align-baseline"
          >
            <span className="sr-only">Sending...</span>
          </Spinner>
        )}
      </Button>
    </Form>
  );*/
}

export default CalculatorSection;