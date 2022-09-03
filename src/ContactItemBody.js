import React from 'react';
import PropTypes from 'prop-types';

function ContactItemBody({ name, tag }) {
	return (
		<div className="contact-item_body">
		<h3 className="contact-item_title">{name}</h3>
		<p className="contact-item_username">@{tag}</p>
		</div>
		);
}

ContactItemBody.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired
}

export default ContactItemBody;