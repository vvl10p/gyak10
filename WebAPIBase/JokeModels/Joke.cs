﻿using System;
using System.Collections.Generic;

namespace WebAPIBase.JokeModels;

public partial class Joke
{
    public int JokeSk { get; set; }

    public string? JokeText { get; set; }

    public int UpVotes { get; set; }

    public int DownVotes { get; set; }
}
