/**
 * External dependencies
 */
import React from 'react';
import classnames from 'classnames';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import PostRelativeTimeStatus from 'my-sites/post-relative-time-status';
import PostTotalViews from 'my-sites/posts/post-total-views';

import utils from 'lib/posts/utils';



// import { userCan } from 'lib/posts/utils';
// import * as stats from 'reader/stats';

const getContentLink = ( site, post ) => {
	let contentLinkURL = post.URL;
	let contentLinkTarget = '_blank';

	if ( utils.userCan( 'edit_post', post ) ) {
		contentLinkURL = utils.getEditURL( post, site );
		contentLinkTarget = null;
	} else if ( post.status === 'trash' ) {
		contentLinkURL = null;
	}

	return { contentLinkURL, contentLinkTarget };
};

const PostActions = ( { className, post, site } ) => {

	const { contentLinkURL, contentLinkTarget } = getContentLink( site, post );

	return (
		<ul className={ classnames( 'post-actions', className )}>
			<li className="post-actions_item post-actions__relative-time">
				<PostRelativeTimeStatus
					post={ post }
					link={ contentLinkURL }
					target={ contentLinkTarget }
					onClick={ () => {} }/>
			</li>
			<li>
				<PostTotalViews post={ post } clickHandler={ () => {} } />
			</li>
		</ul>
	);
};

PostActions.propTypes = {
	post: React.PropTypes.object.isRequired,
}

export default localize( PostActions );
