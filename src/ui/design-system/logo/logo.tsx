interface Props {
  size?: "very-small" | "small" | "medium" | "large";
}

export const Logo = ({ size = "medium" }: Props) => {
  let sizeLogo: number = 0;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 61;
      break;
    case "medium": //Default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }
  return (
    <div>
      <svg
        width={sizeLogo}
        viewBox="0 0 61 69"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M30.3622 60.7201C46.9405 60.7201 60.3797 47.2665 60.3797 30.6706C60.3797 14.0747 46.9405 0.621094 30.3622 0.621094C13.784 0.621094 0.344727 14.0747 0.344727 30.6706C0.344727 47.2665 13.784 60.7201 30.3622 60.7201Z"
          fill="#5F62E2"
        />
        <path
          d="M42.7689 54.4066L44.5955 51.1981L45.2847 54.5446C48.1796 51.5431 49.5926 49.9561 50.8678 46.6096L55.3135 48.9901L54.6587 42.8146L53.5904 40.1236L56.6921 40.4341C55.796 38.3986 54.8655 36.5011 53.6938 34.7761C54.8655 33.3616 55.6582 32.2921 55.5548 29.9806C55.4859 28.6351 55.0378 27.2551 54.2107 26.4616C53.2113 25.5301 51.4537 23.9431 50.0407 24.3226C49.6616 24.4261 49.2825 24.5986 48.9034 24.8056L49.0412 18.4231L48.9378 17.9401C46.5599 11.9716 42.3209 8.00406 37.496 6.07206C32.9124 4.24356 27.8463 4.24356 23.2627 6.07206C18.4378 8.00406 14.2333 11.9371 11.8209 17.9401L11.7175 18.4576L11.8554 24.8401C11.4763 24.6331 11.0627 24.4606 10.7181 24.3571C9.30507 23.9776 7.54744 25.5646 6.54801 26.4961C5.72089 27.2896 5.27287 28.6351 5.20394 30.0151C5.10055 32.3611 5.8932 33.3961 7.06496 34.8106C5.8932 36.5356 4.9627 38.4331 4.06665 40.4686L7.16834 40.1581L6.09998 42.8491L5.44518 49.0246L9.89094 46.6441C11.1316 49.9906 12.5791 51.5776 15.474 54.5791L16.1633 51.2326L17.9898 54.4411C17.9898 54.4411 18.0243 62.2381 24.4344 66.4126L24.1243 64.7221C24.1243 64.7221 27.1226 69.6211 36.5655 67.9996L35.2904 66.5161C35.2904 66.5161 37.9441 66.0331 40.2531 64.2391L38.3231 64.1701C41.0802 61.6171 42.4243 57.8911 42.7689 54.4066Z"
          fill="#081630"
        />
        <path
          d="M46.4222 26.7721C38.7024 19.1821 22.0567 19.1821 14.3024 26.7721L13.9233 33.2926C17.8522 30.2566 24.5725 27.5311 30.4312 27.3586C36.29 27.4966 42.8725 30.2566 46.8013 33.2926L46.4222 26.7721Z"
          fill="#6E75E5"
        />
        <path
          d="M46.4222 26.772C44.3889 24.771 41.7007 23.2875 38.7369 22.3215C35.9454 24.978 29.4318 28.3935 14.1646 29.256L13.9233 33.258C17.8522 30.222 24.5725 27.4965 30.4312 27.324C36.29 27.462 42.8725 30.222 46.8013 33.258L46.4222 26.772Z"
          fill="#5658CB"
        />
        <path
          d="M45.5605 25.2197C45.1469 24.8057 44.6989 24.3917 44.2509 24.0122L44.3198 28.8077C40.2876 26.2892 34.8424 24.3917 30.4311 24.3572C26.1577 24.2882 20.3678 26.3582 16.4046 28.8077L16.4735 23.9087C16.0255 24.2882 15.5774 24.6677 15.1639 25.1162L14.8882 31.7402C18.6102 28.7042 24.917 26.0132 30.4311 25.8407C35.9452 25.9787 42.1142 28.7042 45.8362 31.6712L45.5605 25.2197Z"
          fill="#081630"
        />
        <path
          d="M14.3024 23.529C22.8837 16.974 37.8752 16.974 46.4566 23.529L46.56 18.6645C44.4233 13.4895 40.7702 10.074 36.6001 8.41803C32.6368 6.83103 28.1566 6.83103 24.1933 8.41803C19.9888 10.074 16.3357 13.4895 14.199 18.6645L14.3024 23.529Z"
          fill="#6E75E5"
        />
        <path
          d="M14.3023 23.5291C22.8836 16.9741 37.8752 16.9741 46.4565 23.5291L46.5599 18.6646C44.8712 14.5936 42.252 11.5921 39.1503 9.69458C36.1175 13.3171 29.3627 17.6641 14.2678 19.9411L14.3023 23.5291Z"
          fill="#5658CB"
        />
        <path
          d="M37.7029 44.022C37.1515 44.988 36.3589 45.471 35.0837 46.023C36.8069 44.16 36.0832 41.469 35.9453 41.055C35.2561 40.3305 33.9464 39.744 33.3261 39.468C31.9476 39.882 31.2583 40.6755 31.2583 40.6755L30.3278 41.7105L29.3973 40.6755C29.3973 40.6755 28.708 39.882 27.3295 39.468C26.7092 39.7095 25.3996 40.3305 24.7103 41.055C24.5724 41.469 23.9866 44.16 25.7097 46.023C24.4346 45.471 23.5041 44.988 22.9527 44.022L20.4024 46.575C19.2306 54.234 20.8504 63.894 30.6724 63.618C32.1199 62.997 33.6707 61.9965 34.6357 60.375C34.6357 60.375 35.4628 60.8925 35.9109 62.1C40.5289 59.0295 40.908 51.5775 40.1498 46.5405L37.7029 44.022Z"
          fill="#FEDBB8"
        />
        <path
          d="M35.4283 45.6435C36.7379 43.815 36.1176 41.4345 35.9797 41.055C35.2905 40.3305 33.9809 39.744 33.3605 39.468C31.982 39.882 31.2927 40.6755 31.2927 40.6755L30.8792 41.124C34.1532 41.676 36.3244 43.5045 35.4283 45.6435ZM29.7419 40.986L29.4662 40.6755C29.4662 40.6755 28.7769 39.882 27.3984 39.468C26.778 39.7095 25.4684 40.3305 24.7792 41.055C24.7447 41.124 24.7102 41.2965 24.6758 41.538C26.3989 41.0205 28.1566 40.848 29.7419 40.986Z"
          fill="#E0B497"
        />
        <path
          d="M22.1944 44.8501L20.5056 46.5751C19.3339 54.2341 20.9537 63.8941 30.7757 63.6181C32.2232 62.9971 33.774 61.9966 34.739 60.3751C34.739 60.3751 35.5661 60.8926 36.0141 62.1001C36.9791 61.4446 37.7718 60.6166 38.3921 59.6506C21.3328 60.9271 21.7463 48.4036 22.1944 44.8501Z"
          fill="#E0B497"
        />
        <path
          d="M22.2634 41.0896C22.2634 40.9516 22.2634 40.7791 22.2634 40.6411C23.2629 38.9851 25.0894 37.6396 26.8815 36.9841C27.0883 36.9496 27.3295 36.9496 27.5708 36.9496C27.812 34.9831 27.3985 32.3956 27.1572 32.2921C26.4679 31.9471 23.3662 31.6021 22.4013 31.4641C19.6442 32.4646 17.1284 33.8446 15.164 35.4316C14.8538 35.6731 14.5092 35.8456 14.1646 35.9146C14.2679 37.6051 14.6126 40.0891 16.0256 40.7446C17.9555 41.6761 21.0572 41.2966 22.2634 41.0896Z"
          fill="#3A4559"
        />
        <path
          d="M22.6769 31.533L22.3667 31.4985C21.5741 31.7745 20.8159 32.085 20.0922 32.43L15.5085 40.434C15.6464 40.572 15.8187 40.6755 15.991 40.7445C16.3357 40.917 16.7492 41.0205 17.1628 41.124L22.6769 31.533Z"
          fill="#6A7486"
        />
        <path
          d="M24.5724 31.7745C24.2622 31.74 23.9176 31.671 23.6074 31.6365L18.0588 41.262C18.4035 41.2965 18.7136 41.331 19.0583 41.331L24.5724 31.7745Z"
          fill="#6A7486"
        />
        <path
          d="M26.4335 32.0851C26.1578 32.0161 25.8477 31.9816 25.503 31.9126L20.0923 41.3311C20.4714 41.2966 20.8505 41.2966 21.1606 41.2621L26.4335 32.0851Z"
          fill="#6A7486"
        />
        <path
          d="M9.47761 31.809C9.30529 31.2225 9.30529 31.0845 9.30529 30.498C8.92619 30.8775 8.58156 31.3605 8.30586 31.9125C8.27139 30.8775 8.47817 29.6355 9.23636 28.842L11.2008 27.324C10.6494 27.0135 10.0635 26.8065 9.8567 26.91C9.30529 27.255 8.68495 27.7725 8.20247 28.221C7.47874 28.911 7.44427 31.2915 8.06461 32.0505L8.61603 32.775C8.89173 32.43 9.2019 32.1195 9.47761 31.809Z"
          fill="#FEDBB8"
        />
        <path
          d="M9.47743 31.8091C9.30512 31.2226 9.30512 31.0846 9.30512 30.4981C8.92602 30.8776 8.58139 31.3606 8.30568 31.9126C8.27122 31.4296 8.34014 30.8776 8.44353 30.3601C8.20229 30.4636 7.92659 30.5326 7.65088 30.6016C7.68534 31.2226 7.8232 31.8091 8.0989 32.1196L8.61585 32.7751C8.89156 32.4301 9.20173 32.1196 9.47743 31.8091ZM10.6492 27.8071L11.2351 27.3586C11.0283 27.2551 10.8215 27.1516 10.6147 27.0481C10.6492 27.2896 10.6492 27.5311 10.6492 27.8071Z"
          fill="#E0B497"
        />
        <path
          d="M11.6487 29.9116L11.6832 29.2561L10.5804 29.6701C10.5459 30.3601 10.5114 30.4291 10.6148 30.7396C10.9595 30.4636 11.3041 30.1876 11.6487 29.9116Z"
          fill="#E0B497"
        />
        <path
          d="M30.638 36.3286H30.1211C30.1211 36.9151 30.0522 37.4671 29.9143 37.9501C30.0866 38.0536 30.2589 38.1226 30.3623 38.1916C30.4657 38.1226 30.638 38.0191 30.8104 37.9501C30.707 37.4671 30.638 36.9151 30.638 36.3286Z"
          fill="#E0B497"
        />
        <path
          d="M38.4611 41.0896C39.7018 41.2966 42.769 41.6416 44.7679 40.7446C46.1464 40.0891 46.5255 37.6051 46.6289 35.9146C46.2843 35.8456 45.9396 35.7076 45.6295 35.4316C43.6651 33.8446 41.1492 32.4646 38.3922 31.4641C37.4272 31.5676 34.3255 31.9471 33.6362 32.2921C33.395 32.4301 32.9814 34.9831 33.2227 36.9496C33.4639 36.9151 33.6707 36.9151 33.9119 36.9841C35.704 37.6396 37.5306 38.9851 38.53 40.6411C38.4611 40.7791 38.4611 40.9516 38.4611 41.0896Z"
          fill="#3A4559"
        />
        <path
          d="M41.0113 32.6027C40.4943 32.3612 39.9429 32.1197 39.3915 31.8782L35.8418 38.0192C36.3587 38.3642 36.8068 38.7437 37.2548 39.1577L41.0113 32.6027Z"
          fill="#6A7486"
        />
        <path
          d="M42.5967 33.4306C42.3555 33.2926 42.0798 33.1546 41.8041 33.0166L37.8752 39.8476C38.082 40.0891 38.2888 40.3651 38.4267 40.6411L42.5967 33.4306Z"
          fill="#6A7486"
        />
        <path
          d="M39.1504 41.1932C39.4261 41.2277 39.7707 41.2622 40.1154 41.2967L44.1131 34.3622C43.8719 34.1897 43.6306 34.0517 43.3549 33.8792L39.1504 41.1932Z"
          fill="#6A7486"
        />
        <path
          d="M50.1096 30.7397C49.765 30.4637 49.4204 30.1532 49.0757 29.8772L49.0413 29.2217L50.1441 29.6702C50.1785 30.3602 50.213 30.4292 50.1096 30.7397Z"
          fill="#E0B497"
        />
        <path
          d="M52.1085 32.775C51.8328 32.43 51.5226 32.1195 51.2124 31.809C51.3847 31.2225 51.4192 31.0845 51.3847 30.498C51.7638 30.8775 52.1085 31.3605 52.3842 31.9125C52.4186 30.8775 52.2119 29.6355 51.4537 28.842L49.4893 27.324C50.0407 27.0135 50.6265 26.8065 50.8333 26.91C51.3847 27.255 52.0051 27.7725 52.4876 28.221C53.2113 28.911 53.2458 31.2915 52.6254 32.0505L52.1085 32.775Z"
          fill="#FEDBB8"
        />
        <path
          d="M52.1087 32.7752C51.833 32.4302 51.5228 32.1197 51.2126 31.8092C51.3849 31.2227 51.4194 31.0847 51.3849 30.4982C51.764 30.8777 52.1087 31.3607 52.3844 31.9127C52.3844 31.5332 52.3844 31.1192 52.3155 30.7052C52.5222 30.8432 52.729 30.9467 52.9703 31.0502C52.9013 31.4987 52.7635 31.8782 52.5912 32.0852L52.1087 32.7752ZM50.42 28.0487L49.5239 27.3587C49.7996 27.2207 50.0409 27.0827 50.2821 27.0137C50.2821 27.3242 50.3166 27.6692 50.42 28.0487Z"
          fill="#E0B497"
        />
        <path
          d="M30.3622 29.8081C29.604 29.8426 28.8803 29.9116 28.1221 30.0151C29.087 30.4291 29.6729 31.8436 29.9142 33.4651H30.7413C31.017 31.8091 31.5684 30.4291 32.5334 30.0151C31.8441 29.9461 31.1204 29.8771 30.3622 29.8081Z"
          fill="#E0B497"
        />
        <path
          d="M29.9486 44.3326L29.4661 42.1591C29.3972 41.8141 29.1904 41.5381 28.8803 41.3656L28.1221 40.9516C27.7774 40.7791 27.3983 40.7446 27.0537 40.9171L26.9159 40.9861C26.3989 41.2276 26.1577 41.7796 26.261 42.3316L26.3989 43.0216L26.5368 42.8836C26.8125 42.5731 27.1916 42.4696 27.6051 42.5386L28.1221 42.6421C28.3978 42.6766 28.639 42.8146 28.8113 43.0216L29.9486 44.3326ZM30.7757 44.3326L31.2582 42.1591C31.3272 41.8141 31.5339 41.5381 31.8441 41.3656L32.6023 40.9516C32.9469 40.7791 33.326 40.7446 33.6707 40.9171L33.8085 40.9861C34.3255 41.2276 34.5667 41.7796 34.4633 42.3316L34.3255 43.0216L34.1876 42.8836C33.9119 42.5731 33.5328 42.4696 33.1192 42.5386L32.6023 42.6421C32.3266 42.6766 32.0853 42.8146 31.913 43.0216L30.7757 44.3326Z"
          fill="#081630"
        />
        <path
          d="M19.6096 55.8902C19.6441 55.8902 26.0887 51.4052 34.9113 50.6807C38.013 51.7847 40.2187 54.2342 41.5627 56.5802L39.426 57.8222C38.2887 55.8902 36.9102 54.0962 34.8079 53.1992C26.778 53.9237 20.7469 58.5467 20.7469 58.5812L19.6096 55.8902Z"
          fill="#081630"
        />
        <path
          d="M30.3623 8.90112C31.2929 8.90112 32.1889 9.14262 32.9471 9.52212C33.7397 9.90162 34.3945 10.4191 34.877 11.0056C33.3606 10.7986 31.8787 10.6261 30.3623 10.6261C28.846 10.6261 27.364 10.7986 25.8477 11.0056C26.3646 10.4191 27.0194 9.90162 27.7776 9.52212C28.5703 9.14262 29.4318 8.93562 30.3623 8.90112ZM34.877 15.6631C34.3601 16.1461 33.7053 16.5256 32.9471 16.8361C32.1889 17.1121 31.2929 17.2846 30.3623 17.2846C29.4318 17.2846 28.5703 17.1121 27.7776 16.8361C27.0194 16.5601 26.3301 16.1461 25.8477 15.6631C27.364 15.5941 28.846 15.5596 30.3623 15.5596C31.8787 15.5596 33.3606 15.5941 34.877 15.6631Z"
          fill="#081630"
        />
      </svg>
    </div>
  );
};