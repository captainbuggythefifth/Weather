import requestor from 'helpers/http-requester/instance';
import { GITHUB_USER_DETAILS_URL } from 'env'
const getGitHubUserDetails = async (username: string) => {

    const result = await requestor.execute({
        url: `${GITHUB_USER_DETAILS_URL}${username}`,
        method: "GET",
    });

    return result

};

const fetcherGitHubUserDetails = (url: string) => getGitHubUserDetails(url).then(res => res.response.data);


export {
    getGitHubUserDetails,
    fetcherGitHubUserDetails
}
