const arr = [1, 2, 999, 56, "Mithum", 1234, "PW"]
for (let i = 0; i <= arr.length; i++) {
    if (typeof arr[i] == "string") {
        console.log("Found first string: " + arr[i])
    }
}