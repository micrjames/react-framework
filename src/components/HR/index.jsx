const HR = ({ color }) => {
   return (
      <hr
          style={{
              background: color,
              color: color,
              borderColor: color,
              width: "100%",
              height: "2px"
          }}
      />
  );
};

export default HR;
