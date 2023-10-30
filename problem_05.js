let packageType="standard"
switch(packageType)
{
    case "standard":
        console.log("standard might take 3-5 days");
        break;
    case "express":
        console.log("express might take 1-2 days");
        break;
    case "overnight":
        console.log("overnight would be delivered the next day");
        break;
    default:
        console.log("wrong package")
}