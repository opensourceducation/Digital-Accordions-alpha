export const branchNamer = (process) =>{

    if(process.branch == null){
        return process;

    } else {
        return processIdBranchNamer(process);
    }
} 




const processIdBranchNamer = (process) => {
    const totalBranches = parseInt(process.branch.length) + 1;
    const processNumber = process.processId;

    process.processId = processNumber + ", " + 1 + "-" + totalBranches;
    process.branch.map((branch,index) => branch.processId = processNumber + ", " + (index+2) + "-" + totalBranches)
    process.branch.map(branch => branchNamer(branch))

    return process;
}