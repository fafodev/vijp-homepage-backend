/**
 * 
 */
package global.hsc.posts;

import java.util.ArrayList;

import global.common.dto.response.AbstractResponse;

/**
 * @author k_trong
 *
 */
public class PostsResponse extends AbstractResponse {
	public ArrayList<PostsDto> listPosts;
	public int listPostCnt;
}
