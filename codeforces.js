const axios = require("axios");
const codeforcesStats = async (req, res) => {
  try {
    // Make API call to fetch user submissions from Codeforces
    const response = await axios.get(
      `https://codeforces.com/api/user.status?handle=${req.params.handle}&from=1&count=10000`
    );
    const submissions = response.data.result;

    // Filter successful submissions (verdict = "OK")
    const successfulSubmissions = submissions.filter(
      (submission) => submission.verdict === "OK"
    );

    // Construct an array to store extracted links
    const linksArray = [];
    successfulSubmissions.forEach((submission) => {
      const problemLink = `https://codeforces.com/problemset/problem/${submission.problem.contestId}/${submission.problem.index}`;
      linksArray.push(problemLink);
    });

    // Construct response data
    const responseData = {
      success: true,
      links: linksArray,
    };

    // Send response
    console.log(responseData);
    res.status(200).send(responseData);
  } catch (err) {
    // Handle errors
    res.status(500).send({ success: false, error: err.message });
  }
};

module.exports = {
  codeforcesStats,
};
