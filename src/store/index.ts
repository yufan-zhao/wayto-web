/*!
 * Authors:
 *      yyhugh
 * 
 * Copyright (C) 2020-present O&M Cloud Inc. All rights reserved.
 */
import Application from "./application";
import User from "./user";

const modules =
{
    application: new Application(),
    user: new User()
};

export default modules;
