const resolvers = {
  Query: {
    latestReviews(_, __, { dataSources }) {
      return dataSources.reviewsAPI.getLatestReviews();
    },
  },
  Location: {
    overallRating: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getOverallRatingForLocation(id);
    },
    reviews: ({ id }, _, { dataSources }) => {
      return dataSources.reviewsAPI.getReviewsForLocation(id);
    },
  },
  Mutation: {
    submitReview(_, { review }, { dataSources }) {
      const newReview = dataSources.reviewsAPI.submitReviewForLocation(review);
      return {
        code: 200,
        success: true,
        message: "success",
        review: newReview,
      };
    },
  },
  Review: {
    location({ locationId }) {
      return { id: locationId };
    },
  },
};

module.exports = resolvers;
