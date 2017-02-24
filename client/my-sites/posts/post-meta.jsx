/**
 * External dependencies
 */
import React from 'react';
import { connect } from 'react-redux';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { getPostTotalCommentsCount } from 'state/comments/selectors';

export const PostMeta = ( { totalCommentsCount } ) => <span>Comments Count: { totalCommentsCount }</span>;

export default connect(
	( state, { post: { site_ID: siteId, ID: postId, discussion: { comment_count: commentCount } } } ) => ( {
		totalCommentsCount: getPostTotalCommentsCount( state, siteId, postId ) || commentCount
	} )
)( localize( PostMeta ) );
